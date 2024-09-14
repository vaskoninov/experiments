import puppeteer from "puppeteer";
import * as cheerio from "cheerio";

const getMedals = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const page = await browser.newPage();

    await page.goto("https://olympics.com/en/paris-2024/medals", {
        waitUntil: "domcontentloaded",
    });

    // Function to fetch and parse the content of the page
    const fetchContent = async () => {
        const content = await page.content();
        const $ = cheerio.load(content);

        const data = [];
        $("div.emotion-srm-fvu3gb.euzfwma0").each((index, element) => {
            const spans = $(element).find("span");
            if (spans.length >= 7) {
                // Ensure there are enough spans
                data.push({
                    country_name: $(spans[2]).text().trim(),
                    gold: $(spans[3]).text().trim(),
                    silver: $(spans[4]).text().trim(),
                    bronze: $(spans[5]).text().trim(),
                    total: $(spans[6]).text().trim(),
                });
            }
        });
        return data;
    };

    const allMedals = [];
    const seenCountries = new Set(); // Track seen country names

    // Function to scrape and filter new rows
    const scrapeNewRows = async () => {
        const newMedals = await fetchContent();
        newMedals.forEach((medal) => {
            if (!seenCountries.has(medal.country_name)) {
                seenCountries.add(medal.country_name);
                allMedals.push(medal);
            }
        });
    };

    // Function to check if the footer is in view, only way to have a consistent scraping due to lazy-loading
    const isFooterInView = async () => {
        return page.evaluate(() => {
            const footer = document.querySelector("footer"); // Adjust selector if needed
            if (!footer) return false;
            const rect = footer.getBoundingClientRect();
            return rect.top < window.innerHeight;
        });
    };

    // Function to scroll and fetch content
    const scrollAndFetch = async () => {
        // Fetch initial content
        await scrapeNewRows();

        while (true) {
            // Scroll down by one viewport height
            await page.evaluate(() => window.scrollBy(0, window.innerHeight));

            // Wait for content to load
            await delay(3000); // Increase delay to ensure new content is loaded

            // Fetch new content
            await scrapeNewRows();

            // Check if the footer is in view
            if (await isFooterInView()) {
                break;
            }
        }
    };

    // Run the scrolling and fetching process
    await scrollAndFetch();

    // Allow some time for the last content to be fully loaded
    await delay(3000);
    await scrapeNewRows();

    await browser.close();
    return allMedals;
};

getMedals().then((medals) => {
    console.log(`Total unique rows fetched: ${medals.length}`);
});

const medals = await getMedals();
console.log(medals.length);
console.log(medals.sort((a, b) => a.total - b.total));

// Fields for Visual Add
const capturedURL = document.getElementById("url");
const capturedTitle = document.getElementById("title");
// Buttons for different styles
const viewMarkdownBtn = document.getElementById("viewMarkdown");
const viewOrgBtn = document.getElementById("viewOrg");
const viewTextBtn = document.getElementById("viewText");
// References to result fields
const styledLink = document.getElementById("styled");
const copyTextBtn = document.getElementById("copyButton");

// Get current tab and assign value to Page Title and Page URL
async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

getCurrentTab().then((tab) => {
    let pageTitle = tab.title;
    const pageURL = tab.url;

    if (!pageTitle || pageTitle.trim() === "") {
        pageTitle = "Untitled Page";
    }

    capturedURL.textContent = pageURL;
    capturedTitle.value = pageTitle;
});

// Copy text to clipboard
copyTextBtn.addEventListener("click", copyTextFunc);
function copyTextFunc() {
    try {
        navigator.clipboard.writeText(styledLink.textContent);
        const alert = document.createElement("span");
        alert.textContent = "Your styled link was copied successfully!";
        alert.style.color = "green";
        copyTextBtn.after(alert);
        setTimeout(() => {
            alert.remove();
        }, 2000);
    } catch (err) {
        console.log(err);
    }
}

// Different Link Stylers
viewMarkdownBtn.addEventListener("click", markdownStyle);
function markdownStyle() {
    makeStyledLinkVisible(
        `[${capturedTitle.value}](${capturedURL.textContent})`
    );
}

viewOrgBtn.addEventListener("click", orgStyle);
function orgStyle() {
    makeStyledLinkVisible(
        `[[${capturedURL.textContent}][${capturedTitle.value}]]`
    );
}

viewTextBtn.addEventListener("click", plainTextStyle);
function plainTextStyle() {
    makeStyledLinkVisible(
        `${capturedURL.textContent} - ${capturedTitle.value}`
    );
}

// Add the field of the link plus the copy btn
function makeStyledLinkVisible(content) {
    styledLink.style.display = "block";
    copyTextBtn.style.display = "block";
    styledLink.classList.add("p-2");
    styledLink.textContent = content;
}

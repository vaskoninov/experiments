import sys
import requests
from bs4 import BeautifulSoup


def printing_fetched_data(fetched):
    for key, values in fetched.items():
        print(
            f"{key} - Gold: {values['gold']} | Silver: {values['silver']} | Bronze: {values['bronze']} | {values['total']}"
        )


URL = f"https://olympics.com/en/paris-2024/medals"

USER_AGENT = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"

headers = {
    "user-agent": USER_AGENT,
}

resp = requests.get(URL, headers=headers)

if resp.status_code == 200:
    print(200)
else:
    sys.exit("No connection")


soup = BeautifulSoup(resp.content, "html.parser")

table = soup.find("div", {"data-test-id": "virtuoso-item-list"})
# print(table.prettify())
result = {}

# print(f"Number of rows found: {len(table.find_all('div', {'class': 'emotion-srm-fvu3gb elhe7kv0'}))}")

for row in table.find_all("div", {"class": "emotion-srm-fvu3gb euzfwma0"}):
    country_name = None
    gold = 0
    silver = 0
    bronze = 0
    total = 0
    # print(row)

    spans = row.find_all("span")
    # print(spans, len(spans))
    country_name = spans[2].get_text()

    gold = spans[3].get_text()
    silver = spans[4].get_text()
    bronze = spans[5].get_text()

    total = spans[6].get_text()

    result[country_name] = {
        "gold": gold,
        "silver": silver,
        "bronze": bronze,
        "total": total,
    }


if len(sys.argv) > 1:
    total_sort = dict(sorted(result.items(), key=lambda x: -int(x[1]["total"])))
    print(sys.argv)
    # print(sorted(result.items()))
    printing_fetched_data(total_sort)
else:
    printing_fetched_data(result)

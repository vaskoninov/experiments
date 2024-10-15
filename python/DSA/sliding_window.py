string = "abcdeab"


def longest_non_repeating_string(s: str):
    result = 0
    chars = set()
    strings = []

    i = 0
    j = 0

    for j in range(len(s)):
        while s[j] in chars:
            chars.remove(s[i])
            i += 1
        chars.add(s[j])
        result = max(result, j - i + 1)

    return result, s[i : result + i]


number, lengths = longest_non_repeating_string(string)

print(number, lengths, sep="\n")

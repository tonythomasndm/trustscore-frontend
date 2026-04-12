const LIST_MARKER_REGEX = /(?:^|\s)\d+[.)]\s+/g;
const LEADING_LIST_MARKER_REGEX = /^\d+[.)]\s*/;
const SENTENCE_SPLIT_REGEX = /(?<=[.!?])\s+(?=[A-Z0-9])/;

const cleanItem = (value: string) =>
  value
    .trim()
    .replace(LEADING_LIST_MARKER_REGEX, "")
    .replace(/\s+/g, " ")
    .trim();

const parseNumberedList = (text: string) => {
  const markers = [...text.matchAll(LIST_MARKER_REGEX)];
  const hasExplicitNumberedList =
    markers.length >= 2 ||
    (markers.length === 1 && (markers[0].index ?? -1) === 0);

  if (!hasExplicitNumberedList) {
    return [];
  }

  return text
    .replace(LIST_MARKER_REGEX, "|||")
    .split("|||")
    .map(cleanItem)
    .filter(Boolean);
};

export const parseInsightText = (text: string): string[] => {
  if (!text) return [];

  const normalizedText = text.replace(/\s+/g, " ").trim();
  if (!normalizedText) return [];

  const numberedItems = parseNumberedList(normalizedText);
  if (numberedItems.length > 0) {
    return numberedItems;
  }

  return normalizedText
    .split(SENTENCE_SPLIT_REGEX)
    .map(cleanItem)
    .filter(Boolean);
};

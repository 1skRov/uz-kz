export const slugify = (text) => {
  const cyrillic = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "yo",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ъ: "",
    ы: "y",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",
  };

  return text
    .toString()
    .toLowerCase()
    .replace(/[а-яё]/g, (char) => cyrillic[char] || char) // Транслит
    .replace(/\s+/g, "-") // Замена пробелов на тире
    .replace(/[^\w-]+/g, "") // Удаление всех не-букв (кроме тире)
    .replace(/--+/g, "-") // Удаление двойных тире
    .trim();
};

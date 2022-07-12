const maxLength = 250;

const cutText = (text) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength);
  }

  return text;
};

export { cutText };

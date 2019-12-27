class Colors {
  static randomGradient(): string {
    const color = `${Math.floor(0 + Math.random() * 255)}, ${Math.floor(
      0 + Math.random() * 255
    )}, ${Math.floor(0 + Math.random() * 255)}`;

    return `linear-gradient(180deg, rgba(${color},0.1) 0%, rgba(${color},0) 100%);`;
  }
}

export default Colors;

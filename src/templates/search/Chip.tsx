type ChipProps = {
  text: string;
};

export const Chip = ({ text }: ChipProps) => {
  return (
    <div class="glass-background-wrapper br-50">
      <div class="chip glass-background-element">
        <p class="chip-text">{text}</p>
        <div class="gradient-bg br-50 blur-5"></div>
      </div>
    </div>
  );
};

import "./SectionHeader.scss";

export default function SectionHeader({
  primaryHeading,
  primaryHeadingColor = "#E64D11",
  secondaryHeading,
  secondaryHeadingColor = "#444",
}) {
  return (
    <div className="section-header">
      <h2 className="primary-heading" style={{ color: primaryHeadingColor }}>
        {primaryHeading}
      </h2>
      <h3
        className="secondary-heading"
        style={{ color: secondaryHeadingColor }}
      >
        {secondaryHeading}
      </h3>
    </div>
  );
}

import * as React from "react";
import { handleFunctionProps } from "../../utils";

const defaultComponentName = "input";

const calculateBaseStyle = (disabled: boolean) => ({
  fontSize: "18px",
  ...(!disabled && { cursor: "pointer" }),
  padding: 0,
  marginTop: "1px",
  verticalAlign: "middle",
  position: "relative",
});

interface CheckboxProps {
  name: string;
  component?: any;
  componentOptions?: { [key: string]: unknown };
  indeterminate?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

function Checkbox({
  name,
  component = defaultComponentName,
  componentOptions = { style: {} },
  indeterminate = false,
  checked = false,
  disabled = false,
  onClick = () => null,
}: CheckboxProps): JSX.Element {
  const setCheckboxRef = (checkbox: HTMLInputElement) => {
    if (checkbox) {
      checkbox.indeterminate = indeterminate;
    }
  };

  const TagName = component;
  const baseStyle =
    TagName !== defaultComponentName ? componentOptions.style : calculateBaseStyle(disabled);
  const resolvedComponentOptions = React.useMemo(
    () => handleFunctionProps(componentOptions, indeterminate),
    [componentOptions, indeterminate]
  );

  return (
    <TagName
      type="checkbox"
      ref={setCheckboxRef}
      style={baseStyle}
      onClick={disabled ? null : onClick}
      name={name}
      aria-label={name}
      checked={checked}
      disabled={disabled}
      {...resolvedComponentOptions}
      onChange={null} // prevent uncontrolled checkbox warnings -  we don't need onChange
    />
  );
}

export default React.memo(Checkbox);

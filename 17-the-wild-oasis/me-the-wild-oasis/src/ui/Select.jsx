/* eslint-disable react/prop-types */
import styled from "styled-components";

const SSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid ${(props) => (props.type === "white" ? "var(--color-grey-100)" : "var(--color-grey-300)")};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

const Select = ({ options, value, onChange, ...props }) => {
  return (
    <SSelect value={value} onChange={onChange} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </SSelect>
  );
};

export default Select;

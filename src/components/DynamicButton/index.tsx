import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface ButtonContainerProps {
  disabled?: boolean;
  loading?: boolean;
  width?: string;
}

const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  background-color: #097969;
  width: ${({ width }) => width ?? ""};
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  gap: 0.5rem;

  height: 35px;
  cursor: ${({ disabled, loading }) =>
    disabled || loading ? "not-allowed" : "pointer"};
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#097969")};
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    color: black;
  }
`;

interface DynamicButtonProps {
  icon?: IconDefinition;
  text?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  width?: string;
  loading?:boolean
}

export const DynamicButton = ({
  icon,
  text,
  onClick,
  className,
  disabled,
  width,
  loading,
}: DynamicButtonProps) => {
  return (
    <ButtonContainer
      width={width}
      disabled={disabled}
      className={className}
      onClick={onClick}
      loading={loading}
    >
      {icon && <FontAwesomeIcon icon={icon as IconProp} />}
      {text && <p>{text}</p>}
    </ButtonContainer>
  );
};

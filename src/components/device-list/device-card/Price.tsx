import styled from "styled-components";

interface Props {
  price: number;
}

export const Price = ({ price }: Props): React.JSX.Element => {
  const zlote = Math.floor(price);
  const grosze = Math.round((price % 1) * 100)
    .toString()
    .padStart(2, "0");
  const installments = 60;
  const intallmentPrice = Math.floor((price / installments) * 100) / 100;

  return (
    <>
      <StyledPrice>
        {zlote}
        <StyledContainer>
          {grosze}
          <StyledParagraph>zł</StyledParagraph>
        </StyledContainer>
      </StyledPrice>
      <StyledInstallments>
        {intallmentPrice} zł x {installments} rat
      </StyledInstallments>
    </>
  );
};

const StyledPrice = styled.div`
  font-size: 40px;
  line-height: 40px;
  font-weight: 700;
  color: #000;
  display: flex;
  gap: 5px;
`;

const StyledContainer = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const StyledParagraph = styled.p`
  margin: 0;
`;

const StyledInstallments = styled.div`
  color: #555555;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  margin-top: 10px;
`;

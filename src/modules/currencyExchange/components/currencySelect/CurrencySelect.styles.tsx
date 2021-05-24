import styled, { css }  from 'styled-components';
import MaterialSelect from '@material-ui/core/Select';

export const Select = styled(MaterialSelect)`
  ${({ theme: { typography } }) => css`
    font-size: ${typography.subtitle};
  `}
`;

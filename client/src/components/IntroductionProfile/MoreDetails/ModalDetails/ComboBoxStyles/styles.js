import { makeStyles } from '@material-ui/core';
import { theme } from '../../../../../common/theme';
import comboPost3 from '../../../../../common/images/comboPost3.png';

export const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'relative',
    backgroundColor: 'var(--card-background)',
    boxShadow: theme.shadows[5],
    borderRadius: '8px',
    overflowY: 'hidden',
    // height: '90vh',
    // maxWidth: '700px',
    border: '1px solid var(--border-item)',
    padding: '0',
    color: 'var(--primary-text)',
  },
}));

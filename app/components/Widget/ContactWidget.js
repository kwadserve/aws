import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Hidden from '@mui/material/Hidden';
import Badge from '@mui/material/Badge';
import Paper from '@mui/material/Paper';
import PhoneIcon from '@mui/icons-material/Phone';
import Chat from '@mui/icons-material/Chat';
import Mail from '@mui/icons-material/Mail';
import NotificationsActive from '@mui/icons-material/NotificationsActive';
import Info from '@mui/icons-material/Info';
import Warning from '@mui/icons-material/Warning';
import Check from '@mui/icons-material/CheckCircle';
import Error from '@mui/icons-material/RemoveCircle';
import AccountBox from '@mui/icons-material/AccountBox';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PlaylistAddCheck from '@mui/icons-material/PlaylistAddCheck';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import dataContact from 'enl-api/apps/contactData';
import messageStyles from 'enl-styles/Messages.scss';
import { injectIntl, FormattedMessage } from 'react-intl';
import messages from './messages';
import useStyles from './widget-jss';

/* Tab Container */
function TabContainer(props) {
  const { children } = props;
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = { children: PropTypes.node.isRequired, };
/* END Tab Container */

/* Contact List */
function ContactList(props) {
  const { classes } = useStyles();
  const { intl } = props;

  const getItem = dataArray => dataArray.map(data => (
    <ListItem
      button
      key={data.id}
    >
      <ListItemAvatar>
        <Avatar alt={data.name} src={data.avatar} className={classes.avatar} />
      </ListItemAvatar>
      <ListItemText primary={data.name} secondary={data.title} />
      <Hidden smDown>
        <ListItemSecondaryAction>
          <Tooltip title={intl.formatMessage(messages.chat)}>
            <IconButton className={classes.blueText} aria-label="Chat" size="large">
              <Chat />
            </IconButton>
          </Tooltip>
          <Tooltip title={intl.formatMessage(messages.email)}>
            <IconButton className={classes.pinkText} aria-label="Email" size="large">
              <Mail />
            </IconButton>
          </Tooltip>
          <Tooltip title={intl.formatMessage(messages.call)}>
            <IconButton className={classes.tealText} aria-label="Telp" size="large">
              <PhoneIcon />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </Hidden>
      <Hidden smUp>
        <ListItemSecondaryAction>
          <IconButton
            aria-label="More"
            aria-haspopup="true"
            onClick={props.openMenu}
            size="large">
            <MoreVertIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </Hidden>
    </ListItem>
  ));
  return (
    <List>
      {getItem(dataContact)}
    </List>
  );
}

ContactList.propTypes = {
  openMenu: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired
};

const ContactListStyled = injectIntl(ContactList);

/* END Contact List */

/* Conversation List */
function MessagesList() {
  const { classes } = useStyles();
  return (
    <List>
      <ListItem button component={NavLink} to="/app/pages/chat">
        <ListItemAvatar>
          <Avatar alt={dataContact[2].name} src={dataContact[2].avatar} className={classes.avatar} />
        </ListItemAvatar>
        <ListItemText primary={dataContact[2].name} className={classes.messages} secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <ListItemSecondaryAction>
          <Typography variant="caption">10:42 PM</Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem button component={NavLink} to="/app/pages/chat">
        <ListItemAvatar>
          <Avatar alt={dataContact[5].name} src={dataContact[5].avatar} className={classes.avatar} />
        </ListItemAvatar>
        <ListItemText primary={dataContact[5].name} className={classes.messages} secondary="Sed a ipsum euismod, eleifend turpis sed." />
        <ListItemSecondaryAction>
          <Typography variant="caption">11:17 AM</Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem button component={NavLink} to="/app/pages/chat">
        <ListItemAvatar>
          <Avatar alt={dataContact[1].name} src={dataContact[1].avatar} className={classes.avatar} />
        </ListItemAvatar>
        <ListItemText primary={dataContact[1].name} className={classes.messages} secondary="Praesent viverra est et risus fringilla bibendum." />
        <ListItemSecondaryAction>
          <Typography variant="caption">11 Oct</Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem button component={NavLink} to="/app/pages/chat">
        <ListItemAvatar>
          <Avatar alt={dataContact[0].name} src={dataContact[0].avatar} className={classes.avatar} />
        </ListItemAvatar>
        <ListItemText primary={dataContact[0].name} className={classes.messages} secondary="Praesent at ex non leo iaculis dignissim. Proin nec venenatis nulla, nec vulputate ipsum. Curabitur eu dignissim nibh, eget condimentum massa." />
        <ListItemSecondaryAction>
          <Typography variant="caption">12 Oct</Typography>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

/* END Conversation List */

/* Email List */
function NotifList(props) {
  const { openMenu } = props;
  const { classes } = useStyles();

  return (
    <List>
      <ListItem button className={messageStyles.messageInfo}>
        <ListItemAvatar>
          <Avatar className={messageStyles.icon}>
            <Info />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Lorem ipsum dolor" secondary="12 Oct 2018" />
        <Hidden smDown>
          <ListItemSecondaryAction>
            <Button variant="outlined" size="small" color="primary" className={classes.button}>
              <FormattedMessage {...messages.fixit} />
            </Button>
            <Button variant="outlined" size="small" className={classes.button}>
              <FormattedMessage {...messages.skip} />
            </Button>
          </ListItemSecondaryAction>
        </Hidden>
        <Hidden smUp>
          <ListItemSecondaryAction>
            <IconButton aria-label="More" aria-haspopup="true" onClick={openMenu} size="large">
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </Hidden>
      </ListItem>
      <ListItem button className={messageStyles.messageSuccess}>
        <ListItemAvatar>
          <Avatar className={messageStyles.icon}>
            <Check />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Lorem ipsum dolor" secondary="12 Oct 2018" />
        <Hidden smDown>
          <ListItemSecondaryAction>
            <Button variant="outlined" size="small" color="primary" className={classes.button}>
              <FormattedMessage {...messages.fixit} />
            </Button>
            <Button variant="outlined" size="small" className={classes.button}>
              <FormattedMessage {...messages.skip} />
            </Button>
          </ListItemSecondaryAction>
        </Hidden>
        <Hidden smUp>
          <ListItemSecondaryAction>
            <IconButton aria-label="More" aria-haspopup="true" onClick={openMenu} size="large">
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </Hidden>
      </ListItem>
      <ListItem button className={messageStyles.messageWarning}>
        <ListItemAvatar>
          <Avatar className={messageStyles.icon}>
            <Warning />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Lorem ipsum dolor" secondary="12 Oct 2018" />
        <Hidden smDown>
          <ListItemSecondaryAction>
            <Button variant="outlined" size="small" color="primary" className={classes.button}>
              <FormattedMessage {...messages.fixit} />
            </Button>
            <Button variant="outlined" size="small" className={classes.button}>
              <FormattedMessage {...messages.skip} />
            </Button>
          </ListItemSecondaryAction>
        </Hidden>
        <Hidden smUp>
          <ListItemSecondaryAction>
            <IconButton aria-label="More" aria-haspopup="true" onClick={openMenu} size="large">
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </Hidden>
      </ListItem>
      <ListItem button className={messageStyles.messageError}>
        <ListItemAvatar>
          <Avatar className={messageStyles.icon}>
            <Error />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Lorem ipsum dolor" secondary="12 Oct 2018" />
        <Hidden smDown>
          <ListItemSecondaryAction>
            <Button variant="outlined" size="small" color="primary" className={classes.button}>
              <FormattedMessage {...messages.fixit} />
            </Button>
            <Button variant="outlined" size="small" className={classes.button}>
              <FormattedMessage {...messages.skip} />
            </Button>
          </ListItemSecondaryAction>
        </Hidden>
        <Hidden smUp>
          <ListItemSecondaryAction>
            <IconButton aria-label="More" aria-haspopup="true" onClick={openMenu} size="large">
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </Hidden>
      </ListItem>
    </List>
  );
}

NotifList.propTypes = {
  openMenu: PropTypes.func.isRequired,
};

/* END Email List */

function ContactWidget(props) {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElAction, setAnchorElAction] = useState(null);

  const handleChange = (event, val) => {
    setValue(val);
  };

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpenAction = event => {
    setAnchorElAction(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorElAction(null);
  };

  const { intl } = props;
  const { classes } = useStyles();
  const open = Boolean(anchorEl);
  const openAct = Boolean(anchorElAction);
  return (
    <Fragment>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Chat className={classes.blueText} />
          </ListItemIcon>
          <ListItemText variant="inset" primary="Chat" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Mail className={classes.pinkText} />
          </ListItemIcon>
          <ListItemText variant="inset" primary="Email" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PhoneIcon className={classes.tealText} />
          </ListItemIcon>
          <ListItemText variant="inset" primary="Call" />
        </MenuItem>
      </Menu>
      <Menu
        id="long-menu-act"
        anchorEl={anchorElAction}
        open={openAct}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Check className={classes.tealText} />
          </ListItemIcon>
          <ListItemText variant="inset" primary="Fix it" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PlaylistAddCheck />
          </ListItemIcon>
          <ListItemText variant="inset" primary="Skip" />
        </MenuItem>
      </Menu>
      <Paper className={classes.rootContact}>
        <AppBar position="static" color="default">
          <Hidden mdUp>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab icon={<AccountBox />} />
              <Tab icon={<Chat />} />
              <Tab icon={<NotificationsActive />} />
            </Tabs>
          </Hidden>
          <Hidden mdDown>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label={intl.formatMessage(messages.contacts)} icon={<AccountBox />} />
              <Tab
                label={(
                  <Badge className={classes.tabNotif} color="secondary" badgeContent={4}>
                    <FormattedMessage {...messages.massages} />
                  </Badge>
                )}
                icon={<Chat />}
              />
              <Tab
                label={(
                  <Badge className={classes.tabNotif} color="secondary" badgeContent={4}>
                    <FormattedMessage {...messages.notification} />
                  </Badge>
                )}
                icon={<NotificationsActive />}
              />
            </Tabs>
          </Hidden>
        </AppBar>
        {value === 0 && <TabContainer><ContactListStyled openMenu={handleOpen} /></TabContainer>}
        {value === 1 && <TabContainer><MessagesList /></TabContainer>}
        {value === 2 && <TabContainer><NotifList openMenu={handleOpenAction} /></TabContainer>}
      </Paper>
    </Fragment>
  );
}

ContactWidget.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(ContactWidget);

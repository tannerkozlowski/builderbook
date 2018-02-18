import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Paper from 'material-ui/Paper';
import InfoOutline from 'material-ui-icons/InfoOutline';

import withAuth from '../lib/withAuth';
import withLayout from '../lib/withLayout';
import notify from '../lib/notifier';

import { styleExternalLinkIcon } from '../components/SharedStyles';


const stylePaper = {
  padding: '1px 20px 20px 20px',
  margin: '20px 0px',
};

class Index extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      displayName: PropTypes.string,
      email: PropTypes.string.isRequired,
    }),
  }

  static defaultProps = {
    user: null,
  }

  render() {
    const { user } = this.props;
    return (
      <div style={{ padding: '10px 45px' }}>
        <Head>
          <title>Settings on Harbor</title>
          <meta
            name="description"
            content="List of purchased books."
          />
        </Head>
        <p>
          List of purchased books
        </p>

        <Paper style={stylePaper}>
          <p>Email: {user.email}</p>
        </Paper>

        <InfoOutline
          style={styleExternalLinkIcon}
          onClick={() => notify('some useful informational message')}
        />

      </div>
    );
  }
}

export default withAuth(withLayout(Index));

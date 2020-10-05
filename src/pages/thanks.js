import React from 'react';
import Layout from '../components/Layout';
import get from 'lodash/get';
import { graphql } from 'gatsby';

class Thanks extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <main>
          <p>
            This is my personal blog. Inspired by{' '}
            <a href="https://overreacted.io/">overreacted.io's</a> blog.
          </p>
          <p>
            Forked from here :{' '}
            <a href="https://github.com/gaearon/overreacted.io">github</a>.
            Thanks Dan!
          </p>
        </main>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query AboutSiteData {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Thanks;

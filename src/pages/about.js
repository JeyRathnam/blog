import React from 'react';
import Layout from '../components/Layout';
import get from 'lodash/get';
import { graphql } from 'gatsby';

class About extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <main>
          <h1>
            This is my personal blog, source for this blog is forked from
            overreacted.io.{' '}
          </h1>
          <p>
            You are now confirmed. You can expect to receive emails as I create
            new content.
          </p>
        </main>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query ThanksSiteData {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default About;

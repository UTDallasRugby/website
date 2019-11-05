import React from 'react';
import { graphql } from 'gatsby';

import PageHeader from '../components/PageHeader';
import Content from '../components/Content';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import SVGIcon from '../components/SVGIcon';

// Export Template for use in CMS preview
export const PhotosPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body,
  gallery,
}) => (
  <main className="PhotosPage">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      <div className="container">
        <Content source={body} />
        <div className="container">
          <h2>Our gallery component</h2>
          <Gallery images={gallery} />
        </div>
      </div>
    </section>
  </main>
);

const PhotosPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <PhotosPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
);
export default PhotosPage;

export const pageQuery = graphql`
  query PhotosPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`;

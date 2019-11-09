import React from 'react';
import { Link } from 'gatsby';

import Image from './Image';
import './PlayerCard.css';

const PlayerCard = ({
  featuredImage,
  title,
  excerpt,
  slug,
  categories = [],
  className = '',
  ...props
}) => (
  <Link to={slug} className={`PlayerCard ${className}`}>
    {featuredImage && (
      <div className="PlayerCard--Image relative">
        <Image background src={featuredImage} alt={title} />
      </div>
    )}
    <div className="PlayerCard--Content">
      {title && <h3 className="PlayerCard--Title">{title}</h3>}
      <div className="PlayerCard--Category">
        {categories && categories.map(cat => cat.category).join(', ')}
      </div>
      {excerpt && <div className="PlayerCard--Excerpt">{excerpt}</div>}
    </div>
  </Link>
);

export default PlayerCard;

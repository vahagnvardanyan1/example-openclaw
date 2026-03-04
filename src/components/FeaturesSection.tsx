import React from 'react';

const features = [
    {title: 'Feature One', description: 'Description of feature one.'},
    {title: 'Feature Two', description: 'Description of feature two.'},
    {title: 'Feature Three', description: 'Description of feature three.'}
];

const FeaturesSection: React.FC = () => {
    return (
        <section className="features-section">
            <h2>Our Features</h2>
            <ul>
                {features.map(feature => (
                    <li key={feature.title} className="feature-item">
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default FeaturesSection;

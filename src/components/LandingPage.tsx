import React from 'react';
import useLandingPageData from '../hooks/useLandingPageData.js';

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  const { data, loading, error } = useLandingPageData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="landing-page">
      <h1>Welcome to Our Application</h1>
      <p>This is the main landing page of the application. More content will be added here soon.</p>
      {data && <div>{data.content}</div>}
    </div>
  );
};

export default LandingPage;

import React, { useState, useEffect, FC } from 'react';

interface Data {
  id: number;
  name: string;
}

const RefactoredComponent: FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result as Data[]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div aria-busy="true">Loading...</div>;
  if (error) return <div role="alert" aria-live="assertive">{error}</div>;
  if (data.length === 0) return <div>No data available</div>;

  return (
    <ul aria-live="polite">
      {data.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default RefactoredComponent;
// Skills modeled as a data pipeline — each stage is a step data flows through.
export const pipeline = [
  {
    stage: 'Ingest',
    caption: 'Pulling data from disparate, messy sources.',
    items: ['Python', 'SQL', 'REST APIs', 'WebSockets'],
  },
  {
    stage: 'Process & Store',
    caption: 'Cleaning, modeling, and persisting it reliably.',
    items: ['ETL', 'Pandas', 'PostgreSQL', 'Oracle SQL', 'MongoDB', 'AWS S3'],
  },
  {
    stage: 'Model & Analyze',
    caption: 'Extracting signal and quantifying it.',
    items: ['Scikit-Learn', 'R', 'Feature Engineering', 'Power BI', 'Matplotlib'],
  },
  {
    stage: 'Deliver',
    caption: 'Shipping it as something people can use.',
    items: ['Streamlit', 'Docker', 'React', 'Next.js', 'Git'],
  },
]

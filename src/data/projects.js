export const projects = [
  {
    id: 1,
    title: 'Spotify Chart Sustainability Analysis',
    description:
      'A multi-source ETL pipeline processing 30,000+ records across Spotify Audio Features, Billboard Hot 100, and Charts datasets, resolving entity resolution conflicts across disparate schemas. Built parallel relational (Oracle SQL) and document (MongoDB) schemas to benchmark query performance trade-offs, then trained a multivariate linear regression model to predict chart longevity from audio features.',
    tags: ['Python', 'Oracle SQL', 'MongoDB', 'Scikit-Learn'],
    visual: 'audio',
    github: null,
    live: null,
  },
  {
    id: 2,
    title: 'Engine Fault Detection Pipeline',
    description:
      'An end-to-end ML pipeline processing NASA C-MAPSS turbofan sensor data through schema validation, rolling-window feature engineering, and Random Forest fault classification, with versioned model artifacts persisted to AWS S3 via a swappable storage layer. Used engine-grouped cross-validation to prevent data leakage between consecutive readings, achieving 0.88 F1 and 0.93 recall on held-out engines, and shipped an interactive Streamlit dashboard ranking engines by predicted failure risk — all containerized with Docker and covered by automated tests.',
    tags: ['Python', 'Scikit-Learn', 'AWS S3', 'Streamlit', 'Docker'],
    visual: 'signal',
    github: null,
    live: null,
  },
  {
    id: 3,
    title: 'Predictive Modeling for Medical Diagnosis',
    description:
      'A K-Nearest-Neighbours classifier in R predicting heart disease from ST depression and maximum heart rate, built on four merged UCI Heart Disease datasets (Cleveland, Hungary, Switzerland, VA). Used a tidymodels recipe to impute missing values and standardize predictors, then tuned k via 5-fold cross-validation (grid search over k = 1–50, settling on k = 41) and evaluated with a confusion matrix — reaching 77.5% accuracy, 79.7% precision, and 75.0% recall on held-out data.',
    tags: ['R', 'tidymodels', 'tidyverse', 'KNN', 'Cross-Validation', 'ggplot2'],
    visual: 'ecg',
    github: null,
    live: null,
  },
  {
    id: 4,
    title: 'StaTracker',
    description:
      'A Java-based statistics tracker enabling users to view, store, and manage match data. Implemented both graphical and console-based interfaces for adding and viewing statistics and calculating averages, with JSON-backed data persistence for saving and loading from the file system.',
    tags: ['Java', 'JSON', 'Swing'],
    visual: 'bars',
    github: null,
    live: null,
  },
]

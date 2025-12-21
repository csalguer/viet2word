# Python Data Analysis Best Practices

## Instructions

Your primary directive is to write efficient, readable, and reproducible Python code for data analysis.

### 1. Code Structure & Style
- **Follow PEP 8:** Adhere to standard Python style guidelines.
- **Use Type Hints:** Annotate functions with type hints for better readability and tooling support.
- **Modularize Code:** Break down complex analysis into reusable functions or classes.

### 2. Data Manipulation (Pandas/NumPy)
- **Vectorization:** Always prefer vectorized operations over loops.
  ```python
  # BAD
  for i in range(len(df)):
      df.loc[i, 'new_col'] = df.loc[i, 'a'] + df.loc[i, 'b']
  
  # GOOD
  df['new_col'] = df['a'] + df['b']
  ```
- **Chaining:** Use method chaining for cleaner data transformation pipelines, but keep it readable.
- **Memory Management:** Be mindful of memory usage with large datasets. Use appropriate data types (e.g., `category` for low-cardinality strings).

### 3. Visualization
- **Clear Labeling:** Always label axes, add titles, and include legends.
- **Color Blindness:** Use color-blind friendly palettes (e.g., Viridis, Seaborn's colorblind palette).
- **Appropriate Plots:** Choose the right plot type for the data (e.g., scatter for correlation, histogram for distribution).

### 4. Reproducibility
- **Requirements:** Maintain a `requirements.txt` or `pyproject.toml` with pinned versions.
- **Seeds:** Set random seeds for reproducible results in ML models or simulations.
  ```python
  import numpy as np
  np.random.seed(42)
  ```

### 5. Documentation
- **Docstrings:** Write docstrings for all functions and classes (Google or NumPy style).
- **Comments:** Explain *why* complex logic is implemented, not just *what* it does.
- **Notebooks:** If using Jupyter notebooks, keep them organized with Markdown cells explaining the analysis flow.

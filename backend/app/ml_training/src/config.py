from pathlib import Path

# Root folder of the ML project
BASE_DIR = Path(__file__).resolve().parent.parent

# Dataset
DATASET_PATH = BASE_DIR / "dataset" / "kaggle_diabetes.csv"

# Where trained models will be stored
ARTIFACTS_DIR = BASE_DIR / "artifacts"

MODEL_PATH = ARTIFACTS_DIR / "diabetes_model.pkl"

# Reports
REPORT_DIR = BASE_DIR / "reports"
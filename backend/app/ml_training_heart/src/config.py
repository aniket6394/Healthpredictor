from pathlib import Path

# Root folder of the ML project
BASE_DIR = Path(__file__).resolve().parent.parent

# Dataset
DATASET_PATH = BASE_DIR / "dataset" / "heart.csv"

# Where trained models will be stored
ARTIFACTS_DIR = BASE_DIR / "artifacts"

MODEL_PATH = ARTIFACTS_DIR / "heart_model.pkl"

# Reports
REPORT_DIR = BASE_DIR / "reports"
import joblib

from .config import (
    ARTIFACTS_DIR,
    MODEL_PATH
)


class ModelSaver:

    def save(self, model):

        ARTIFACTS_DIR.mkdir(exist_ok=True)

        joblib.dump(
            model,
            MODEL_PATH
        )

        print("\nModel Saved Successfully")

        print(MODEL_PATH)
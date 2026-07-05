import matplotlib.pyplot as plt
from sklearn.metrics import (
    confusion_matrix,
    ConfusionMatrixDisplay,
    classification_report,
    roc_auc_score,
    RocCurveDisplay
)

from .config import REPORT_DIR


class ModelEvaluator:

    def evaluate(self, model, X_test, y_test):

        predictions = model.predict(X_test)

        print("\nClassification Report\n")

        print(classification_report(y_test, predictions))

        # Confusion Matrix
        cm = confusion_matrix(y_test, predictions)

        disp = ConfusionMatrixDisplay(cm)

        disp.plot()

        plt.savefig(REPORT_DIR / "confusion_matrix.png")

        plt.close()

        # ROC Curve
        RocCurveDisplay.from_estimator(
            model,
            X_test,
            y_test
        )

        plt.savefig(REPORT_DIR / "roc_curve.png")

        plt.close()

        print(
            f"\nROC AUC Score : {roc_auc_score(y_test, model.predict_proba(X_test)[:,1]):.4f}"
        )
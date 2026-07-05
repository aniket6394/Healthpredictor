import matplotlib.pyplot as plt
import seaborn as sns

from .config import REPORT_DIR


class EDA:

    def __init__(self):

        REPORT_DIR.mkdir(exist_ok=True)

    def outcome_distribution(self, df):

        plt.figure(figsize=(6,5))

        sns.countplot(
        data=df,
        x="target"
        )

        plt.title("Outcome Distribution")

        plt.savefig(
            REPORT_DIR / "outcome_distribution.png"
        )

        plt.close()


    def correlation_heatmap(self, df):

        plt.figure(figsize=(10,8))

        sns.heatmap(
            df.corr(),
            annot=True,
            cmap="coolwarm",
            fmt=".2f"
        )

        plt.title("Correlation Heatmap")

        plt.savefig(
            REPORT_DIR / "correlation_heatmap.png"
        )

        plt.close()


    def feature_histograms(self, df):

        df.hist(
            figsize=(15,10),
            bins=20
        )

        plt.tight_layout()

        plt.savefig(
            REPORT_DIR / "feature_histograms.png"
        )

        plt.close()


    def boxplots(self, df):

        for column in df.columns[:-1]:

            plt.figure(figsize=(6,4))

            sns.boxplot(
                y=df[column]
            )

            plt.title(column)

            plt.savefig(
                REPORT_DIR / f"{column}_boxplot.png"
            )

            plt.close()
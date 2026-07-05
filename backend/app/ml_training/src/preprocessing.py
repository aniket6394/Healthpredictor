import numpy as np
import pandas as pd


class DataPreprocessor:

    def __init__(self):
        self.zero_columns = [
            "Glucose",
            "BloodPressure",
            "SkinThickness",
            "Insulin",
            "BMI"
        ]

    def clean_data(self, df: pd.DataFrame):

        df = df.copy()

        print("\nReplacing impossible values with NaN...")

        df[self.zero_columns] = df[self.zero_columns].replace(
            0,
            np.nan
        )

        print("\nMissing Values After Replacement")

        print(df.isnull().sum())

        print("\nFilling Missing Values...")

        df["Glucose"] = df["Glucose"].fillna(
            df["Glucose"].mean()
        )

        df["BloodPressure"] = df["BloodPressure"].fillna(
            df["BloodPressure"].mean()
        )

        df["SkinThickness"] = df["SkinThickness"].fillna(
            df["SkinThickness"].median()
        )

        df["Insulin"] = df["Insulin"].fillna(
            df["Insulin"].median()
        )

        df["BMI"] = df["BMI"].fillna(
            df["BMI"].median()
        )

        print("\nRemaining Missing Values")

        print(df.isnull().sum())

        return df
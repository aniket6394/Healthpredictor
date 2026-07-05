import pandas as pd


class DataPreprocessor:

    def clean_data(self, df: pd.DataFrame):

        df = df.copy()

        print("\nMissing Values")

        print(df.isnull().sum())

        return df
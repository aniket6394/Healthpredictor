import pandas as pd

from .config import DATASET_PATH


class DataLoader:

    def __init__(self):
        self.data = None

    def load_dataset(self):
        """
        Load dataset from CSV.
        """

        self.data = pd.read_csv(DATASET_PATH)

        return self.data

    def dataset_shape(self):
        """
        Returns number of rows and columns.
        """

        rows, columns = self.data.shape

        print("\nDataset Shape")

        print(f"Rows    : {rows}")

        print(f"Columns : {columns}")

    def dataset_info(self):
        """
        Display dataset information.
        """

        print("\nDataset Information")

        print(self.data.info())

    def missing_values(self):
        """
        Check missing values.
        """

        print("\nMissing Values")

        print(self.data.isnull().sum())

    def statistics(self):
        """
        Display numerical statistics.
        """

        print("\nDataset Statistics")

        print(self.data.describe())

    def preview(self):
        """
        Display first five rows.
        """

        print("\nDataset Preview")

        print(self.data.head())
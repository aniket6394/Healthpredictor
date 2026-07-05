from src.data_loader import DataLoader
from src.preprocessing import DataPreprocessor
from src.eda import EDA
from src.model_trainer import ModelTrainer
from src.model_tuner import ModelTuner
from src.model_evaluator import ModelEvaluator
from src.save_model import ModelSaver


def main():

    print("=" * 60)
    print("DIABETES MODEL TRAINING")
    print("=" * 60)

    # Load Dataset
    loader = DataLoader()
    df = loader.load_dataset()

    # Explore Dataset
    loader.preview()
    loader.dataset_shape()
    loader.dataset_info()
    loader.statistics()

    # Clean Dataset
    preprocessor = DataPreprocessor()
    clean_df = preprocessor.clean_data(df)

    # Generate EDA Reports
    print("\nGenerating EDA Reports...")

    eda = EDA()
    eda.outcome_distribution(clean_df)
    eda.correlation_heatmap(clean_df)
    eda.feature_histograms(clean_df)
    eda.boxplots(clean_df)

    print("EDA Reports Generated Successfully")

    # Train Models
    print("\nTraining Machine Learning Models...")

    trainer = ModelTrainer()

    best_model, results_df, X_train, X_test, y_train, y_test = trainer.train_models(clean_df)

    print("\nModel Comparison")
    print(results_df)
    print("\nHyperparameter Tuning...")

    tuner = ModelTuner()

    best_model = tuner.tune_random_forest(
        X_train,
        y_train
    )
    print("\nEvaluating Best Model...")

    evaluator = ModelEvaluator()
    evaluator.evaluate(
        best_model,
        X_test,
        y_test
    )

    print("\nSaving Model...")

    saver = ModelSaver()
    saver.save(best_model)
    print("\nClean Dataset Preview")
    print(clean_df.head())


if __name__ == "__main__":
    main()
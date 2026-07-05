from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestClassifier


class ModelTuner:

    def tune_random_forest(self, X_train, y_train):

        param_grid = {
            "n_estimators": [100, 200, 300],
            "max_depth": [5, 10, None],
            "min_samples_split": [2, 5, 10],
            "min_samples_leaf": [1, 2, 4]
        }

        grid_search = GridSearchCV(
            estimator=RandomForestClassifier(random_state=42),
            param_grid=param_grid,
            cv=5,
            scoring="accuracy",
            n_jobs=-1
        )

        grid_search.fit(X_train, y_train)

        print("\nBest Parameters:")
        print(grid_search.best_params_)

        print(f"\nBest Cross Validation Accuracy: {grid_search.best_score_:.4f}")

        return grid_search.best_estimator_
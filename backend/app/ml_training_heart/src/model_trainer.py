import pandas as pd

from sklearn.model_selection import train_test_split

from sklearn.linear_model import LogisticRegression

from sklearn.tree import DecisionTreeClassifier

from sklearn.ensemble import (
    RandomForestClassifier,
    GradientBoostingClassifier
)

from sklearn.svm import SVC

from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score
)


class ModelTrainer:

    def train_models(self, df):

        X = df.drop("target", axis=1)

        y = df["target"]

        X_train, X_test, y_train, y_test = train_test_split(

            X,

            y,

            test_size=0.2,

            random_state=42,

            stratify=y

        )

        models = {

            "Logistic Regression":
                LogisticRegression(max_iter=1000),

            "Decision Tree":
                DecisionTreeClassifier(random_state=42),

            "Random Forest":
                RandomForestClassifier(
                    n_estimators=200,
                    random_state=42
                ),

            "Support Vector Machine":
                SVC(),

            "Gradient Boosting":
                GradientBoostingClassifier(
                    random_state=42
                )

        }

        results = []

        best_model = None

        best_accuracy = 0

        for name, model in models.items():

            print(f"\nTraining {name}...")

            model.fit(X_train, y_train)

            predictions = model.predict(X_test)

            accuracy = accuracy_score(
                y_test,
                predictions
            )

            precision = precision_score(
                y_test,
                predictions
            )

            recall = recall_score(
                y_test,
                predictions
            )

            f1 = f1_score(
                y_test,
                predictions
            )

            results.append({

                "Model": name,

                "Accuracy": accuracy,

                "Precision": precision,

                "Recall": recall,

                "F1 Score": f1

            })

            if accuracy > best_accuracy:

                best_accuracy = accuracy

                best_model = model

        results_df = pd.DataFrame(results)

        print("\n")
        print(results_df)

        return (
    best_model,
    results_df,
    X_train,
    X_test,
    y_train,
    y_test
)
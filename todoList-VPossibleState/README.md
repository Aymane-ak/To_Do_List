# Analyse des Design Patterns dans le Gestionnaire de Tâches

Dans le cadre de notre projet de gestionnaire de tâches, nous avons identifié plusieurs patterns de conception pertinents et avons analysé leur présence, leur compatibilité et les situations où ils sont inadaptés. La nouvelle architecture utilisant `possibleStates` renforce certains patterns, en particulier le pattern State.

## 1. MVC (Model-View-Controller)

- **Présence :**  
  Partiellement présent.  
  - **Model / Controller :** hook `useTasks` qui gère les tâches, les transitions et les actions (add, delete, toggle).  
  - **View :** composants React (`TaskList`, `TaskItem`, `TaskInput`, `Footer`, `Header`).  

  L’architecture devient plus claire grâce au hook centralisé qui sépare la logique métier des composants d’affichage.

- **Compatibilité :**  
  Peut être renforcé en séparant encore plus le “model” dans un service dédié pour gérer CRUD et transitions.

- **Incompatibilité :**  
  React combine souvent View et Controller, donc MVC pur reste partiel.

---

## 2. Singleton

- **Présence :** Aucun singleton utilisé.  
- **Compatibilité :** Possible pour créer un gestionnaire global de tâches partagé entre composants.  
- **Incompatibilité :** Complexifie testabilité et réactivité dans React.

---

## 3. Abstract Factory

- **Présence :** Aucun factory utilisé.  
- **Compatibilité :** Utile pour produire différents types de tâches (Pending, Done, Important).  
- **Incompatibilité :** Surdimensionné pour un projet simple.

---

## 4. Builder

- **Présence :** Non utilisé.  
- **Compatibilité :** Utile pour construire des tâches complexes avec plusieurs propriétés.  
- **Incompatibilité :** Inutile pour des tâches simples avec seulement `id`, `content`, `state`.

---

## 5. Decorator

- **Présence :** Non utilisé.  
- **Compatibilité :** Permettrait d’ajouter dynamiquement des fonctionnalités aux tâches (badge, rappel…).  
- **Incompatibilité :** React propose déjà des props et composants enfants pour gérer styles et comportements.

---

## 6. Command

- **Présence :** Partiellement présent avec les fonctions `addTask`, `deleteTask`, `toggleTask`.  
- **Compatibilité :** Avec `possibleStates` et `enabling`, les actions ne sont exécutables que si l’état le permet, ce qui renforce l’analogie avec le pattern Command.  
- **Incompatibilité :** Trop complexe pour une application simple si l’on souhaite formaliser toutes les commandes.

---

## 7. Observer

- **Présence :** Implicite via React : les composants se réabonnent automatiquement aux changements de state.  
- **Compatibilité :** Utile pour notifier des services externes (analytics, websocket).  
- **Incompatibilité :** Pas nécessaire de le créer manuellement grâce aux hooks et au state.

---

## 8. State

- **Présence :** Pleinement implémenté avec le hook `useTasks` et `possibleStates`.  
  - Chaque tâche possède un état (`PENDING` ou `DONE`) et un objet `enabling` qui définit les transitions possibles (`TO_DONE`, `TO_PENDING`, `REMOVE`).  
  - Cette implémentation encapsule la logique de transition à l’intérieur de l’état lui-même, ce qui correspond parfaitement au pattern State.  

- **Compatibilité :** Facilement extensible à d’autres états (`IN_PROGRESS`, `BLOCKED`).  
- **Incompatibilité :** Aucun, c’est le pattern le plus adapté pour notre projet.

---

## Conclusion

Grâce à la nouvelle architecture `possibleStates` :

- Le **pattern State** est maintenant pleinement implémenté et robuste.  
- Le **pattern Command** est plus compatible, car les transitions sont contrôlées par l’état.  
- Le **MVC** est plus clair grâce à la centralisation de la logique dans le hook.  
- L’**Observer** reste implicite via React.  
- Les autres patterns (Singleton, Abstract Factory, Builder, Decorator) restent compatibles ou surdimensionnés selon les besoins.


| Pattern           | Présence                                  | Compatibilité                                         | Incompatibilité                          |
|------------------|------------------------------------------|-----------------------------------------------------|-----------------------------------------|
| MVC               | Partiellement présent (Model/State via `useTasks`, View, Controller) | Peut être renforcé avec un service métier séparé    | React combine souvent View et Controller |
| Singleton         | Aucun                                      | Possible pour un gestionnaire global de tâches      | Complexifie testabilité et réactivité    |
| Abstract Factory  | Aucun                                      | Utile pour créer différents types de tâches        | Surdimensionné pour un projet simple    |
| Builder           | Non utilisé                                | Utile pour construire des tâches complexes         | Inutile pour des tâches simples         |
| Decorator         | Non utilisé                                | Ajouter dynamiquement des fonctionnalités (badge, rappel) | Props et composants enfants suffisent   |
| Command           | Partiellement présent (add, delete, toggle) | Renforcé par `enabling` pour exécuter les actions valides | Trop complexe pour ce projet simple     |
| Observer          | Implicite via React (hooks + state)       | Utile pour notifier des services externes          | Pas nécessaire grâce aux hooks          |
| State             | Pleinement implémenté (`PENDING` / `DONE` + `enabling`) | Facilement extensible pour d’autres états         | Aucun, pattern parfaitement adapté      |

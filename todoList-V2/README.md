# Analyse des Design Patterns dans le Gestionnaire de Tâches

Dans le cadre de notre projet de gestionnaire de tâches, nous avons identifié plusieurs patterns de conception pertinents et avons analysé leur présence, leur compatibilité et les situations où ils sont inadaptés. Cette version correspond à l’ancienne architecture où chaque tâche avait simplement un booléen `done`.

## 1. MVC (Model-View-Controller)

- **Présence :**  
  Partiellement présent.  
  - **Model :** état des tâches dans le state React (`useState`).  
  - **View :** composants React (`TaskList`, `TaskItem`, `TaskInput`, `Footer`, `Header`).  
  - **Controller :** fonctions `addTask`, `deleteTask`, `toggleTask`.  

  L’implémentation reste partielle, car les composants React combinent souvent View et Controller.

- **Compatibilité :**  
  Possible en séparant complètement la logique métier dans un service dédié.

- **Incompatibilité :**  
  React combine souvent View et Controller, donc MVC pur reste partiel.

---

## 2. Singleton

- **Présence :** Aucun singleton utilisé.  
- **Compatibilité :** Possible pour créer un gestionnaire global de tâches partagé entre composants.  
- **Incompatibilité :** Peut poser des problèmes de testabilité et réactivité dans React.

---

## 3. Abstract Factory

- **Présence :** Aucun factory utilisé. Les tâches sont créées directement.  
- **Compatibilité :** Utile pour produire différents types de tâches (Pending, Done, Important).  
- **Incompatibilité :** Surdimensionné pour un projet simple.

---

## 4. Builder

- **Présence :** Non utilisé.  
- **Compatibilité :** Utile si les tâches deviennent complexes avec plusieurs propriétés.  
- **Incompatibilité :** Inutile pour des tâches simples avec juste `id`, `content`, `done`.

---

## 5. Decorator

- **Présence :** Non utilisé.  
- **Compatibilité :** Permettrait d’ajouter dynamiquement des fonctionnalités aux tâches (badge, rappel…).  
- **Incompatibilité :** React propose déjà des props et composants enfants pour gérer styles et comportements.

---

## 6. Command

- **Présence :** Partiellement présent avec les fonctions `addTask`, `deleteTask`, `toggleTask`.  
- **Compatibilité :** Peut être formalisé pour gérer undo/redo complet.  
- **Incompatibilité :** Surdimensionné pour une application simple.

---

## 7. Observer

- **Présence :** Implicite via React : les composants se réabonnent aux changements de state.  
- **Compatibilité :** Utile pour notifier des services externes (analytics, websocket).  
- **Incompatibilité :** Pas nécessaire de le créer manuellement grâce aux hooks et au state.

---

## 8. State

- **Présence :** Simple implémentation avec un booléen `done` pour chaque tâche.  
- **Compatibilité :** Peut être étendu à plusieurs états si nécessaire.  
- **Incompatibilité :** La logique de transition est moins formelle que le pattern State classique.

---

## Conclusion

Avec l’ancienne architecture :

- Le **pattern State** est implémenté de façon basique avec `done`.  
- Le **pattern Command** est partiel mais fonctionnel.  
- Le **MVC** est partiel, la logique métier est dispersée.  
- L’**Observer** reste implicite grâce à React.  
- Les autres patterns (Singleton, Abstract Factory, Builder, Decorator) restent compatibles ou surdimensionnés selon les besoins.



| Pattern           | Présence                                  | Compatibilité                                         | Incompatibilité                          |
|------------------|------------------------------------------|-----------------------------------------------------|-----------------------------------------|
| MVC               | Partiellement présent (state + View + Controller) | Peut être renforcé avec un service métier séparé    | React combine souvent View et Controller |
| Singleton         | Aucun                                      | Possible pour un gestionnaire global de tâches      | Complexifie testabilité et réactivité    |
| Abstract Factory  | Aucun                                      | Utile pour créer différents types de tâches        | Surdimensionné pour un projet simple    |
| Builder           | Non utilisé                                | Utile pour construire des tâches complexes         | Inutile pour des tâches simples         |
| Decorator         | Non utilisé                                | Ajouter dynamiquement des fonctionnalités (badge, rappel) | Props et composants enfants suffisent   |
| Command           | Partiellement présent (add, delete, toggle) | Peut être formalisé pour undo/redo                 | Trop complexe pour ce projet simple     |
| Observer          | Implicite via React (hooks + state)       | Utile pour notifier des services externes          | Pas nécessaire grâce aux hooks          |
| State             | Basique (`done` true/false)               | Peut être étendu à plusieurs états                 | Logique de transition moins formelle    |

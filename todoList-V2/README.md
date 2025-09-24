# Analyse des Design Patterns dans le Gestionnaire de Tâches

Dans le cadre de notre projet de gestionnaire de tâches, nous avons identifié plusieurs patterns de conception pertinents et avons analysé leur présence, leur compatibilité et les situations où ils sont inadaptés.

## 1. MVC (Model-View-Controller)

- **Présence :**  
  Partiellement présent.  
  - **Model :** état des tâches dans le hook `useTasks`.  
  - **View :** composants React (`TaskList`, `TaskItem`, `TaskInput`, `Footer`, `Header`).  
  - **Controller :** fonctions `addTask`, `deleteTask`, `toggleTask`.  

  Cette implémentation reste partielle, car les composants React jouent souvent à la fois le rôle de vue et de contrôleur.

- **Compatibilité :**  
  Possible en séparant complètement la logique métier dans un service dédié pour gérer le CRUD des tâches.

- **Incompatibilité :**  
  React moderne ne suit pas le MVC pur, car state et composants combinent souvent vue et contrôleur.

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
- **Incompatibilité :** Inutile pour des tâches simples avec juste `id`, `content`, `state`.

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
- **Compatibilité :** Utile pour notifier des services externes (ex : analytics, websocket).  
- **Incompatibilité :** Pas nécessaire de le créer manuellement grâce aux hooks et au state.

---

## 8. State

- **Présence :** Déjà utilisé dans `useTasks` : chaque tâche a un état (`PENDING` ou `DONE`) avec ses transitions (`enabling`).  
- **Compatibilité :** Facilement extensible à d’autres états (`IN_PROGRESS`, `BLOCKED`).  
- **Incompatibilité :** Aucun, c’est le pattern le plus adapté pour notre projet.

---

## Conclusion

Certains patterns sont déjà présents et utilisés naturellement dans React (State, Observer partiel).  
D’autres sont compatibles et pourraient être ajoutés pour des fonctionnalités plus avancées (Command, Decorator, Singleton).  
Enfin, certains sont inadaptés pour notre application simple (Abstract Factory, Builder).

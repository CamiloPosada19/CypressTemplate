Feature: Realizar una búsqueda en google.
Verificar en que año se hizo el primer proceso automático
Y realizar una screenshot de la página de wikipedia donde figura el año.


Scenario: Busqueda por google y navegación por wikipedia
    Given Buscar en google la palabra "Automatización"
    When Buscar el Link de la Wikipedia resultante
    And Comprobar en que año se hizo el primer proceso automático
    Then Realizar un Screenshots de la página de la Wikipedia donde figura el año
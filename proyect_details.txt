#Descripción General
Una plataforma para gestionar talleres y cursos donde los instructores pueden crear y administrar sus talleres, y los participantes pueden inscribirse, seguir el progreso y recibir notificaciones.
##Colecciones en MongoDB
- Talleres
    - Campos: título, descripción, fecha de inicio, fecha de finalización, horario, instructorId (referencia a la colección de Instructores), participantes (array de referencias a la colección de Participantes).
- Instructores
    - Campos: nombre, correo electrónico, biografía, especialidades, talleres (array de referencias a la colección de Talleres).
- Participantes
    - Campos: nombre, correo electrónico, talleres (array de referencias a la colección de Talleres).
##Relaciones
- Un instructor puede tener múltiples talleres.
- Un taller puede tener múltiples participantes.
- Un participante puede estar inscrito en múltiples talleres.

##Funcionalidades Clave
- Gestión de Talleres:
    - Los instructores pueden crear, editar y eliminar talleres.
    - Los instructores pueden ver la lista de participantes inscritos en sus talleres.
- Inscripción de Participantes:
    - Los participantes pueden buscar talleres disponibles y registrarse.
    - Los participantes pueden ver los talleres en los que están inscritos y seguir su progreso.
- Notificaciones y Recordatorios:
    - Enviar notificaciones a los participantes sobre próximos talleres y recordatorios de sesiones.
    - Notificaciones a los instructores sobre nuevas inscripciones y cambios en los talleres.
- Panel de Administración:
    - Un panel para que los administradores gestionen instructores, talleres y participantes.
    - Estadísticas y reportes sobre la participación y el rendimiento de los talleres.
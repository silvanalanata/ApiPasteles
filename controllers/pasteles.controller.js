const { ApiPastel, ApiCalif } = require("../models/pasteles_modelo");

const getAllPasteles = async (request, response) => {
  const datos = await ApiPastel.find();
  response.json(datos);
};

const postNuevoPastel = async (request, response) => {
  console.log("creando pastel");
  const { pastelero, imagen } = request.body;
  const pastel = new ApiPastel();
  pastel.pastelero = pastelero;
  pastel.imagen = imagen;

  pastel
    .save()
    .then((data) => response.json(data))
    .catch((err) => response.json(err));
};

const postNuevaCalificacion = async (request, response) => {
  let id_ = request.params.id;

  ApiCalif.create(
    { nota: request.body.nota, comentario: request.body.comentario },
    function (err, out) {
      //_comentario devuelve el valor creado
      if (err) {
        response.json(err);
      } else {
        //le paso el objeto
        ApiPastel.findOneAndUpdate(
          { _id: id_ },
          { $push: { calificaciones: out } },
          function (err, _mensaje) {
            if (err) {
              // gestiona el error del intento de actualizar al usuario
              response.json(err);
            } else {
              response.json(out);
              // ¡funcionó! ¿Deberíamos celebrar?
              console.log("calificacion agregada");
            }
          }
        );
      }
    }
  );
};

const getPastelId = async (request, response) => {
  let id = request.params.id;

  ApiPastel.findOne({ _id: id })
    .then((data) => response.json(data))
    .catch((err) => response.json(err));
};

module.exports = {
  getAllPasteles,
  postNuevoPastel,
  postNuevaCalificacion,
  getPastelId,
};

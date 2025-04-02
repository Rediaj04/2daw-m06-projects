package org.openapitools.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.openapitools.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.NativeWebRequest;

import javax.annotation.Generated;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@CrossOrigin("*")
@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2025-03-24T18:55:33.945312570+01:00[Europe/Madrid]", comments = "Generator version: 7.12.0")
@Controller
@RequestMapping("${openapi.objectManagement.base-path:}")
public class ObjectsApiController implements ObjectsApi {

    private final NativeWebRequest request;
    private final ObjectMapper mapper = new ObjectMapper();

    static{
        lista.add(new ModelObject().id(UUID.randomUUID().toString()).name("Peluche Tiburón").data(new ModelData().photo("https://www.ikea.com/es/es/images/products/blahaj-peluche-peluche-tiburon__0716615_pe730956_s5.jpg").description("Peluche de tiburón de 40x40cm").price(30.0)));
        lista.add(new ModelObject().id(UUID.randomUUID().toString()).name("Figura Super Mario").data(new ModelData().photo("https://afede.com/18126-large_default/figura-super-mario-50cm-.jpg").description("Figura de Super Mario Bros, edición especial").price(50.0)));
        lista.add(new ModelObject().id(UUID.randomUUID().toString()).name("Atari ET").data(new ModelData().photo("https://www.chollogames.es/67159-large_default/atari-et-h442.jpg").description("El mejor juego nunca hecho, aventura interactiva").price(999.99)));
    }


    @Override
    public ResponseEntity<List<ModelObject>> objectsGet() {
        return ResponseEntity.ok(lista);
    }

    @Override
    public ResponseEntity<ObjectsIdDelete200Response> objectsIdDelete(String id) {
        lista.stream().filter(modelObject -> modelObject.getId().equals(id)).findFirst().ifPresent(model -> lista.remove(model));
        return ResponseEntity.ok(new ObjectsIdDelete200Response().message("deleted"));
    }

    @Override
    public ResponseEntity<ModelObject> objectsIdGet(String id) {
        Optional<ModelObject> found = lista.stream().filter(modelObject -> modelObject.getId().equals(id)).findFirst();
        return found.isPresent() ? ResponseEntity.ok(found.get()) : ResponseEntity.notFound().build();
    }

    @Override
    public ResponseEntity<ObjectResponse> objectsIdPatch(String id, ObjectRequest body) {
        Optional<ModelObject> found = lista.stream().filter(modelObject -> modelObject.getId().equals(id)).findFirst();
        found.ifPresent(modelObject -> {
            ModelObject change = mapper.convertValue(body, ModelObject.class);
            modelObject.update(change);
        });
        return found.isPresent() ? ResponseEntity.ok(new ObjectResponse().id(found.get().getId())) : ResponseEntity.notFound().build();
    }

    @Override
    public ResponseEntity<ObjectResponse> objectsIdPut(String id, ObjectRequest objectRequest) {
        Optional<ModelObject> found = lista.stream().filter(modelObject -> modelObject.getId().equals(id)).findFirst();
        found.ifPresent(modelObject -> {
            lista.remove(modelObject);
            modelObject = mapper.convertValue(objectRequest, ModelObject.class);
            modelObject.id(id);
            lista.add(modelObject);
        });
        return found.isPresent() ? ResponseEntity.ok(new ObjectResponse().id(found.get().getId())) : ResponseEntity.notFound().build();
    }

    @Override
    public ResponseEntity<ObjectResponse> objectsPost(ObjectRequest objectRequest) {
        lista.add(mapper.convertValue(objectRequest, ModelObject.class).id(UUID.randomUUID().toString()));
        return ResponseEntity.ok(new ObjectResponse().id(lista.getLast().getId()));
    }


    @Autowired
    public ObjectsApiController(NativeWebRequest request) {
        this.request = request;
    }

    @Override
    public Optional<NativeWebRequest> getRequest() {
        return Optional.ofNullable(request);
    }

}

package org.openapitools.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonTypeName;
import io.swagger.v3.oas.annotations.media.Schema;

import javax.annotation.Generated;
import javax.annotation.Nullable;
import java.util.Objects;

/**
 * ModelData
 */
@JsonTypeName("Data")
@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2025-03-24T18:55:33.945312570+01:00[Europe/Madrid]", comments = "Generator version: 7.12.0")
public class ModelData {

    private @Nullable String photo;
    private @Nullable String description;
    private @Nullable Double price;

    public ModelData photo(String photo) {
        this.photo = photo;
        return this;
    }

    /**
     * Get name
     *
     * @return name
     */
    @Schema(name = "photo", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
    @JsonProperty("photo")
    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public ModelData description(String description) {
        this.description = description;
        return this;
    }

    /**
     * Get description
     *
     * @return description
     */
    @Schema(name = "description", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
    @JsonProperty("description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ModelData price(Double price) {
        this.price = price;
        return this;
    }

    /**
     * Get price
     *
     * @return price
     */
    @Schema(name = "price", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
    @JsonProperty("price")
    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ModelData modelData = (ModelData) o;
        return Objects.equals(photo, modelData.photo) &&
                Objects.equals(description, modelData.description) &&
                Objects.equals(price, modelData.price);
    }

    @Override
    public int hashCode() {
        return Objects.hash(photo, description, price);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class ModelData {\n");
        sb.append("    photo: ").append(toIndentedString(photo)).append("\n");
        sb.append("    description: ").append(toIndentedString(description)).append("\n");
        sb.append("    price: ").append(toIndentedString(price)).append("\n");
        sb.append("}");
        return sb.toString();
    }

    private String toIndentedString(Object o) {
        if (o == null) return "null";
        return o.toString().replace("\n", "\n    ");
    }

    public void update(ModelData change) {
        if (change.getPhoto() != null)
            this.photo = change.getPhoto();
        if (change.getDescription() != null)
            this.description = change.getDescription();
        if (change.getPrice() != null)
            this.price = change.getPrice();
    }
}

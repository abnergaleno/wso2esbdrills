package org.ed.integra.integra_tasks;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * Root resource (exposed at "myresource" path)
 */
@Path("v01/")
public class MyResource {

    /**
     * Method handling HTTP GET requests. The returned object will be sent
     * to the client as "text/plain" media type.
     *
     * @return String that will be returned as a text/plain response.
     */
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getIt() {
        return "This is a parent URI, append /tasks or /admins to get a mock JSON return!";
    }
    
    @Path("/getDefaultjson")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getDefaultjson() {
        return "{'defaultkey':'defaulvalue'}".replaceAll("'", "\"");
    }   
    
    
    @Path("/getDefaultxml")
    @GET
    @Produces(MediaType.APPLICATION_XML)
    public String getDefaultxml() {
        return "<?xml version='1.0' encoding='UTF-8'?> <soap:Envelope xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'> <soap:Body xmlns:ns='http://services.samples'> </soap:Body> </soap:Envelope>";
    }   
    
    
    @Path("/admins")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getAdmins() {
        return "{'key001':'value001'}".replaceAll("'", "\"");
    }    

    @Path("/tasks")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getTasks() {
        return "{'taskid':'00001', 'data' : {'name':'task for survery', 'description': 'bore handling'} }".replaceAll("'", "\"");
    }    
    
    
    
}

package ch.bestvision.serv.config;

//import ch.bestvision.serv.example.controller.AnagController;
//import ch.bestvision.serv.example.controller.AnagSoapController;

import javax.xml.ws.Endpoint;

import org.apache.cxf.Bus;
import org.apache.cxf.bus.spring.SpringBus;
import org.apache.cxf.jaxws.EndpointImpl;
import org.apache.cxf.transport.servlet.CXFServlet;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.ws.config.annotation.EnableWs;

import ch.bestvision.serv.user.controller.DataController;
import ch.bestvision.serv.user.controller.soap.DataSoapController;

@Configuration
@EnableWs
@Profile("soap")
public class WebServicesConfig {

	@Bean
    public DataSoapController userWebService(DataController controller) {
        return new DataSoapController(controller);
    }
    
	@Bean
    public ServletRegistrationBean wsDispatcherServlet() {
        CXFServlet cxfServlet = new CXFServlet();
        return new ServletRegistrationBean(cxfServlet, "/services/*");
    }

    @Bean(name= Bus.DEFAULT_BUS_ID)
    public SpringBus springBus() {
        return new SpringBus();
    }

    @Bean
    public Endpoint userEndpoint(SpringBus springBus, DataSoapController userSoapService) {
        EndpointImpl endpoint = new EndpointImpl(springBus, userSoapService);
        endpoint.publish("/ws");
        return endpoint;
    }
}



package ch.bestvision.serv.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ch.bestvision.serv.user.model.DataBean;
import ch.bestvision.serv.user.repository.DataRepository;

@Service
public class DataServiceImpl implements DataService {

	@Autowired 
	private DataRepository repository;
	
	public DataServiceImpl() {
	}

	@Override
	public DataBean getData(Integer id) {
		return repository.getData(id);
	}

}

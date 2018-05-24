package ch.bestvision.serv.user.repository;

import ch.bestvision.serv.user.model.DataBean;

public interface DataRepository {
	
	DataBean getData(Integer id);
}

USE TestFrontEnd;
GO
INSERT INTO role (description,active) VALUES('ADMIN',1);
INSERT INTO role (description,active) VALUES('ADVANCED USER',1);
INSERT INTO role (description,active) VALUES('BASIC',1);
GO
INSERT INTO [user] (rol ,full_name, login_name, emaiL, active, created_at) VALUES(1, 'Pepe Mujica', 'pepemuj', 'pepemuj@example.com', 1,GETDATE());
INSERT INTO [user]  (rol ,full_name, login_name, emaiL, active, created_at) VALUES(2, 'Lola Lambda', 'lolalam', 'lolalamj@example.com', 1,GETDATE());
INSERT INTO [user]  (rol ,full_name, login_name, emaiL, active, created_at) VALUES(3, 'Joseph Gebels', 'josegeb', 'josegeb@example.com', 1,GETDATE());
GO
INSERT INTO pass_reset (code, expires, created_at) VALUES('JAJAJA',GETDATE()+2, GETDATE());
GO
INSERT INTO log_type (description) VALUES('logtype1');
INSERT INTO log_type (description) VALUES('logtype2');
INSERT INTO log_type (description) VALUES('logtype3');
GO
INSERT INTO module_type (description, active, created_at) VALUES('moduletype1', 1, GETDATE());
INSERT INTO module_type (description, active, created_at) VALUES('moduletype2', 1, GETDATE());
INSERT INTO module_type (description, active, created_at) VALUES('moduletype3', 1, GETDATE());
GO
INSERT INTO module (module_type,  description, active, created_at) VALUES(1, 'module1', 1, GETDATE());
INSERT INTO module (module_type,  description, active, created_at) VALUES(2, 'module2', 1, GETDATE());
INSERT INTO module (module_type,  description, active, created_at) VALUES(3, 'module1', 3, GETDATE());
GO
INSERT INTO permission (module, user, role, active, created_at) VALUES (1,1,1,1,GETDATE());
INSERT INTO permission (module, user, role, active, created_at) VALUES (2,2,2,1,GETDATE());
INSERT INTO permission (module, user, role, active, created_at) VALUES (3,3,3,1,GETDATE());
GO
INSERT INTO logs(uid, short_description, description, log_type, userid, module, created_at) VALUES ('3456tyue', 'desc1', 'description1', 1, 1,1, GETDATE());
GO
INSERT INTO history_action(description) VALUES ('historyAction1');
INSERT INTO history_action(description) VALUES ('historyAction2');
INSERT INTO history_action(description) VALUES ('historyAction3');
GO
INSERT INTO history_ref(table, element, ancestor) VALUES ('table1', 2,1);
GO
INSERT INTO history (history_action,history_ref, field, old_value, new_value, userid, module, created_at)VALUES(1,1, 'field1', 'field1 old value', 'field1 new value',1, 1, GETDATE());
INSERT INTO history (history_action,history_ref, field, old_value, new_value, userid, module, created_at)VALUES(2,1, 'field2', 'field2 old value', 'field2 new value',2, 2, GETDATE());
GO
SELECT * FROM role;
SELECT * FROM user;
SELECT * FROM pass_reset;
SELECT * FROM log_type;
SELECT * FROM module_type;
SELECT * FROM module;
SELECT * FROM permission;
SELECT * FROM logs;
SELECT * FROM history_action;
SELECT * FROM history_ref;
SELECT * FROM history;
GO



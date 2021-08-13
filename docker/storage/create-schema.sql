CREATE DATABASE TestFrontEnd;
GO
USE TestFrontEnd;
GO

CREATE TABLE [user] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [role] int NULL,
  [full_name] nvarchar(255),
  [login_name] nvarchar(255),
  [email] nvarchar(255),
  [password] nvarchar(255),
  [active] bit,
  [created_at] datetime2 DEFAULT GETDATE(),
  [end_at] datetime2 NULL,
  CONSTRAINT UQ_user UNIQUE ([login_name])
)
GO

CREATE TABLE [pass_reset] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [user] int NOT NULL,
  [code] nvarchar(255) NOT NULL,
  [expires] datetime2 NOT NULL,
  [created_at] datetime2 DEFAULT GETDATE()
)
GO

CREATE TABLE [role] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [description] nvarchar(255) UNIQUE NOT NULL,
  [active] bit,
  [created_at]  datetime2 DEFAULT GETDATE(),
  [end_at] datetime2 NULL
)
GO

CREATE TABLE [module_type] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [description] nvarchar(255) UNIQUE NOT NULL,
  [active] bit,
  [created_at]  datetime2 DEFAULT GETDATE(),
  [end_at] datetime2 NULL
)
GO

CREATE TABLE [module] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [module_type] int NOT NULL,
  [description] nvarchar(255) UNIQUE NOT NULL,
  [active] bit,
  [created_at]  datetime2 DEFAULT GETDATE(),
  [end_at] datetime2 NULL
)
GO

CREATE TABLE [permission] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [module] int NOT NULL,
  [user] int,
  [role] int,
  [active] bit,
  [created_at]  datetime2 DEFAULT GETDATE(),
  [end_at] datetime2 NULL
)
GO

CREATE TABLE [log_type] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [description] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [log] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [uid] nvarchar(255) NOT NULL,
  [short_description] nvarchar(255) NOT NULL,
  [description] nvarchar(255) NOT NULL,
  [log_type] int NOT NULL,
  [user] int,
  [module] int,
  [created_at]  datetime2 DEFAULT GETDATE()
)
GO

CREATE TABLE [history_action] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [description] nvarchar(255) UNIQUE NOT NULL
)
GO

CREATE TABLE [history_ref] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [table] nvarchar(255) NOT NULL,
  [element] int NOT NULL,
  [ancestor] int,
  CONSTRAINT UQ_history_ref UNIQUE ([id],[table], [element])
)
GO

CREATE TABLE [history] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [history_action] int NOT NULL,
  [history_ref] int NOT NULL,
  [field] nvarchar(255) NULL,
  [old_value] nvarchar(255) NULL,
  [new_value] nvarchar(255) NULL,
  [user] int,
  [module] int,
  [created_at]  datetime2 DEFAULT GETDATE()
)
GO

ALTER TABLE [pass_reset] 
ADD CONSTRAINT FK_pass_reset_user 
FOREIGN KEY ([user]) REFERENCES [user] ([id])
GO

ALTER TABLE [user] 
ADD CONSTRAINT FK_user_role 
FOREIGN KEY ([role]) REFERENCES [role] ([id])
GO

ALTER TABLE [module] 
ADD CONSTRAINT FK_module_module_type
FOREIGN KEY ([module_type]) REFERENCES [module_type] ([id])
GO

ALTER TABLE [permission] 
ADD CONSTRAINT FK_permission_role 
FOREIGN KEY ([role]) REFERENCES [role] ([id])
GO

ALTER TABLE [permission] 
ADD CONSTRAINT FK_permission_module 
FOREIGN KEY ([module]) REFERENCES [module] ([id])
GO

ALTER TABLE [permission] 
ADD CONSTRAINT FK_permission_user 
FOREIGN KEY ([user]) REFERENCES [user] ([id])
GO

ALTER TABLE [log] 
ADD CONSTRAINT FK_log_user 
FOREIGN KEY ([user]) REFERENCES [user] ([id])
GO

ALTER TABLE [log] 
ADD CONSTRAINT FK_log_module 
FOREIGN KEY ([module]) REFERENCES [module] ([id])
GO

ALTER TABLE [log] 
ADD CONSTRAINT FK_log_log_type  
FOREIGN KEY ([log_type]) REFERENCES [log_type] ([id])
GO

ALTER TABLE [history]
ADD CONSTRAINT FK_history_history_action
FOREIGN KEY ([history_action]) REFERENCES [history_action] ([id])
GO

ALTER TABLE [history]
ADD CONSTRAINT FK_history_user
FOREIGN KEY ([user]) REFERENCES [user] ([id])
GO

ALTER TABLE [history] 
ADD CONSTRAINT FK_history_module
FOREIGN KEY ([module]) REFERENCES [module] ([id])
GO

ALTER TABLE [history]
ADD CONSTRAINT FK_history_history_ref
FOREIGN KEY ([history_ref]) REFERENCES [history_ref] ([id])
GO

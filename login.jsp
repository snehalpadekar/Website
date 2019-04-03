<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
     <%@page import="java.sql.*"%>
<%@page import="javax.sql.*"%>
<%@page import="java.util.*"%>
<%


String fname=request.getParameter("fname");  
String lname=request.getParameter("lname");    
String mail=request.getParameter("mail");  
String pwd=request.getParameter("pwd");  
String uname=request.getParameter("uname");  


	Connection conn=null;
	String query="";
	Statement st=null;
	ResultSet rs=null;
	try{
       	Class.forName("com.mysql.jdbc.Driver");
       	conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/demo","root","mysql");
		st = conn.createStatement();
		out.println("connection done..");

		
	}
	catch(Exception e){
		out.println("Error +"+e.getMessage());
		out.println(" error :"+e);
	}
	query="insert into details(username,password,fname,lname,email) values('"+uname+"','"+pwd+"','"+fname+"','"+lname+"','"+mail+"')";

st.executeUpdate(query);
  	out.println("data inserted");
  	out.println("submitted");
%>


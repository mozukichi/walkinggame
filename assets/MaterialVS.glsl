#version 100

precision mediump float;
precision mediump int;

attribute vec4 bl_Vertex;
attribute vec3 bl_Normal;
uniform mat4 bl_ModelViewMatrix;
uniform mat4 bl_ProjectionMatrix;
uniform mat3 bl_NormalMatrix;



varying vec3 varposition;
varying vec3 varnormal;



void main()
{

	vec4 position = bl_Vertex;
	vec3 normal = bl_Normal;


	vec4 co = bl_ModelViewMatrix * position;

	varposition = co.xyz;
	varnormal = normalize(bl_NormalMatrix * normal);
	gl_Position = bl_ProjectionMatrix * co;

 


}
